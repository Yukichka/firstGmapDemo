import React from "react";
import { Gmaps, Marker } from "react-gmaps";

const jsonData = [
  { city: "paris", lat: 48.864716, lng: 2.349014 },
  { city: "milan", lat: 45.464211, lng: 9.191383 }
];

const params = { v: "3.exp", key: "AIzaSyDpm9Z-4a-U-JeKY44oW9rVRjUoRe6tGz0" };

class App extends React.Component {
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log("onDragEnd", e);
  }

  render() {
    return (
      <Gmaps
        width={"800px"}
        height={"600px"}
        lat={48.864716}
        lng={2.349014}
        zoom={3}
        loadingMessage={"Loading map"}
        params={params}
        onMapCreated={this.onMapCreated}
      >
        {jsonData.map((location, idx) => (
          <Marker
            lat={location.lat}
            lng={location.lng}
            draggable={true}
            onDragEnd={this.onDragEnd}
            key={idx}
          />
        ))}
      </Gmaps>
    );
  }
}

export default App;
