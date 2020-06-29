import React from 'react';
import '../Card/style.css';
import { pulse } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  pulse: {
    animation: 'x 2s',
    animationName: Radium.keyframes(pulse, 'pulse')
  }
}

const Card = props => (
  <StyleRoot>
    <div style={styles.pulse}>
      <div className="card" style={{ width: '10rem' }} value={props.id} onClick={() => props.clickHandler(props.id)} >
        <img alt={props.name} src={props.image} className="card-img-top" style={{ height: '8rem' }} />
        <div className="card-body" style={{ textAlign: 'center' }}>
          <p className="card-text">{props.name}
          </p>
        </div>
      </div>
    </div>
  </StyleRoot>
);



export default Card;