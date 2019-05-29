import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AboutModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.show}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle}>streetorigin.com</ModalHeader>
        <ModalBody>
          <p>
            {" "}
            Street Origin is a digital presentation and data visualization
            experiment created to test the feasibility and usefulness of its
            format. Clicking on streets from the map will display a brief
            historical anecdote based on the origin of the streets name.
            Currently there are only 3 active municipalities on Vancouver Island
            (Esquimalt, Oak Bay and Victoria), however, the larger goal of
            Street Origin is for nationwide coverage.{" "}
          </p>
          <p>
            The information presented on Street Origin is sourced directly from
            municipal archives. Analytics data takes that information further by
            assigning classes to the names we researched. For example: If a
            street is named after a person, we can determine their country of
            origin and their occupation. In doing this, a wealth of historical
            data can be derived, visualized and compared.
          </p>
          <p>Analytics are broken down into the following categories:</p>
          <p>
            Name Type: What the street is named after (Person, Ship, Flower
            etc..)
            <br />
            Name Origin: Where the origin of the name or word derives from
            (Britain, Scotland, Ireland etc...)
            <br />
            Occupations: The occupation of the person a street was named after
            (Resident, Doctor, Architect, Lawyer etc...)
          </p>
          <p>
            Note: Certain steps were taken to ensure fairness of categorization.
            Due to the nature of colonization, a name defined as "Canadian"
            represents anything which is named after a feature of the country or
            a person born in Canada. For statistics reasons, names from anyone
            who settled the region but moved from a different country are
            considered to originate from that country. Street Origin is not
            interested in establishing a political agenda, and only aims to
            provide a clear way to visualize historic information.
          </p>
          <p>
            The way streets are named speaks volumes about a region and its
            influences. Some names are lifted directly from an area's geography,
            while others are assigned in honour of important people from the
            past. Street Origin is motivated to help bring these stories to
            life, digitize archived information, and shed light on the reasoning
            behind naming convention wherever possible.
          </p>
          <p>
            {" "}
            Special thanks to the following researchers that helped bring this
            idea to life:
          </p>
          <p>
            {" "}
            Laurie <br /> Dominic <br />
            Josh <br />
            Sean <br />
            Will
          </p>
          <p>Idea by Parker Langlois</p>
          <p>
            Developed by{" "}
            <a
              href="http://www.andywynden.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andy Wynden
            </a>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>
            Close
          </Button>{" "}
        </ModalFooter>
      </Modal>
    );
  }
}

export default AboutModal;
