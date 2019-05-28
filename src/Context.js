import React, { Component } from 'react';

// Creates a context object.
// When React renders a comp that subscribes to this Context object,
// it will read the current context value from the closest matching Provider.
const RoomContext = React.createContext();

// Provider responsible for allowing all comps in comp tree to access it.

export default class RoomProvider extends Component {
  state = {
    greeting: 'hello',
    name: 'jon'
  };

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
