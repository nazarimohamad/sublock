import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Sustanable from './Sustanable';
import Blockchain from './Blockchain';
import Artificial from './Aritificial';
import './home.scss'


const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100%;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }

  .panel.blue {
    background-color: #3883d8;
  }

  .panel.turqoise {
    background-color: #c7c7c7;
  }

  .panel.green {
    background-color: #fff;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;

const Wipes = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel"><Sustanable /></section>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><Blockchain /></section>
          </Tween>
          <Tween
            from={{ y: '100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel green"><Artificial /></section>
          </Tween>
          {/* <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>Panel</span></section>
          </Tween> */}
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default Wipes;