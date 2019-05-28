import React, { Component } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRooms extends Component {
  // Cannot grab context in a functional component, only class comp
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return (
      <div>
        <Room />
        <Loading />
      </div>
    );
  }
}
