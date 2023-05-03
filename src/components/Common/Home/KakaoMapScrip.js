const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(35.662090445596, 128.41446498864),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  var markerPosition = new kakao.maps.LatLng(35.662090445596, 128.41446498864);

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    text: "텍스트를 표시할 수 있어요!",
  });

  marker.setMap(map);
}
