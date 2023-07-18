// import { Box, Spinner } from "@chakra-ui/react";

// const LoadingScreen = () => (
//     <Box
//         sx={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             jusitifyContent: "center",
//             alignItems: "center",
//             zIndex: 100,
//             backgroundColor: "black"
//         }}
//         >
//             <Spinner size="xl" color="red.500" />
//         </Box>
// );

// export default LoadingScreen;
import { useProgress, Html, Loader } from '@react-three/drei'
import { useEffect, useState } from 'react'

export const CustomLoader = () => {
  const { progress, loaded, total } = useProgress()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (loaded === total) {
      setTimeout(() => {
        setShowLoader(false)
      }, 500)
    }
  }, [loaded, total])

  return showLoader ? (
    <Html center>
      <Loader />
      <span>{Math.round(progress)}% loaded</span>
    </Html>
  ) : null
}