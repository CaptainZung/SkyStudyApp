import { Camera, CameraType, FlashMode } from "expo-camera/legacy";
import { useState, useRef } from "react";
import { Button, StyleSheet, TouchableOpacity, View, Image } from "react-native";

export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back); // Camera mặc định là phía sau
  const [flash, setFlash] = useState(FlashMode.off); // Đèn flash mặc định tắt
  const [permission, requestPermission] = Camera.useCameraPermissions(); // Lấy quyền truy cập camera
  const cameraRef = useRef(null); // Ref cho camera

  // Kiểm tra quyền truy cập camera
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  // Chức năng đổi camera giữa trước và sau
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  // Chức năng bật/tắt đèn flash
  function toggleFlash() {
    setFlash((current) =>
      current === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  }

  // Chức năng chụp ảnh
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log("Picture taken: ", photo.uri); // In URI của ảnh ra console
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
        {/* Nút Back phía trên bên trái */}
        <TouchableOpacity style={styles.topLeftButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/back-arrow.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Nút Flash ở giữa phía trên */}
        <TouchableOpacity style={styles.topCenterButton} onPress={toggleFlash}>
          <Image
            source={flash === FlashMode.off
              ? require('../assets/images/flashoff.png')
              : require('../assets/images/flashon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* Nút Flip Camera phía trên bên phải */}
        <TouchableOpacity style={styles.topRightButton} onPress={toggleCameraType}>
          <Image source={require('../assets/images/flip.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Nút chụp ảnh ở giữa phía dưới */}
        <View style={styles.bottomCenterButtonContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Image source={require('../assets/images/cam.png')} style={styles.captureIcon} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

// Styles cho camera và các nút bấm
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    width: '100%',
    aspectRatio: 3 / 4, // Điều chỉnh tỷ lệ camera
  },
  topLeftButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  topRightButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  topCenterButton: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
  },
  bottomCenterButtonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 80,  // Kích thước hình tròn
    height: 80,
    borderRadius: 40, // Biến thành hình tròn
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureIcon: {
    width: 50, // Kích thước icon bên trong nút chụp
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 40, // Kích thước icon Back và Flip
    height: 40,
    resizeMode: 'contain',
  },
});
