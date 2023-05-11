const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 13,
  };

  const map = new kakao.maps.Map(container, options);
  let markerPosition = new kakao.maps.LatLng(37.566826, 126.9786567);

  let marker = new kakao.maps.Marker({
    position: markerPosition,
    map: null, // 지도에 표시하지 않음
  });

  marker.setMap(map); // 이후에 지도에 표시
}
