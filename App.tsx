import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { useVideoPlayer, VideoView, VideoSource } from 'expo-video'
import { useEffect } from 'react'

const videoSource: VideoSource = {
  uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
}

export default function App() {
  const player = useVideoPlayer(videoSource)

  useEffect(() => {
    const subscription = player.addListener('statusChange', console.log)

    return () => {
      subscription.remove()
    }
  }, [player])

  return (
    <View style={styles.contentContainer}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
})
