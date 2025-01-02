import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Buy = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Dropdown Link
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item>
          <Dropdown>
            <Dropdown.Toggle as="a" className="dropdown-item" variant="link">
              Submenu &raquo;
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Submenu item 1</Dropdown.Item>
              <Dropdown.Item href="#">Submenu item 2</Dropdown.Item>
              <Dropdown.Item>
                <Dropdown>
                  <Dropdown.Toggle as="a" className="dropdown-item" variant="link">
                    Submenu item 3 &raquo;
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Multi level 1</Dropdown.Item>
                    <Dropdown.Item href="#">Multi level 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item href="#">Submenu item 4</Dropdown.Item>
              <Dropdown.Item href="#">Submenu item 5</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Buy;
