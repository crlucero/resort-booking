import React, { Component } from 'react';
import items from './data';

// Creates a context object.
// When React renders a comp that subscribes to this Context object,
// it will read the current context value from the closest matching Provider.
const RoomContext = React.createContext();

// Provider responsible for allowing all comps in comp tree to access it.

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  //   Grabs list of rooms on comp mount
  componentDidMount() {
    let rooms = this.formatData(items);
    // If rooms are featured, show them.
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Consumer allows us to access data provided by provider
const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
