import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ExperContainer from './ExperContainer';

import cert from "../assets/img/other-certificate.svg"
import comp from "../assets/img/other-computerRepair.svg"
import interTrade from "../assets/img/other-internationalTradeAndLogistic.svg"
import interExpe from "../assets/img/other-internationalExperience.svg"
import teacher from "../assets/img/other-teacher.svg"

export default function OtherExper() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <ExperContainer srcLink={cert}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          <ExperContainer srcLink={interTrade}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          <ExperContainer srcLink={interExpe}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #4</Accordion.Header>
        <Accordion.Body>
          <ExperContainer srcLink={comp}/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #5</Accordion.Header>
        <Accordion.Body>
          <ExperContainer srcLink={teacher}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
