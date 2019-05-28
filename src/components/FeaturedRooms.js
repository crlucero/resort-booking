import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
  // Cannot grab context in a functional component, only class comp
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {/* If loading is true, shoe spinner, if not shoe rooms */}
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
