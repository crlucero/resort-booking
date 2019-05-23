import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam quia doloremque aperiam deleniti deserunt magni.'
      },
      {
        icon: <FaHiking />,
        title: 'Endless trails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam quia doloremque aperiam deleniti deserunt magni.'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free transportation to and from airport',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam quia doloremque aperiam deleniti deserunt magni.'
      },
      {
        icon: <FaBeer />,
        title: 'Unlimited beer at our world class bar',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quam quia doloremque aperiam deleniti deserunt magni.'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
