const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(35.662090445596, 128.41446498864),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);
  let markerPosition = new kakao.maps.LatLng(35.662090445596, 128.41446498864);

  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);
}
