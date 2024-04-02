import { Row,Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import TicketStyle from "./Ticket.module.css"

const Ticket = ({ handlePage }) => {
  return (
    <div className={TicketStyle.ticket}>
      <div className={`${TicketStyle.header} position-relative`}>
        <Header/>
        <p onClick={handlePage} className={`btn bg-warning ${TicketStyle.home}`}>Home</p>
        </div>
      
      <Row xs={1} className={TicketStyle.main}>
        <Col>
          <h3 className="text-warning">Koltuk Seçiniz</h3>
          <hr className="text-white" />
          <div>
            <p></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Ticket;
