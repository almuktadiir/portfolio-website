
import { Row } from 'react-bootstrap';
import { FaCss3, FaHtml5, FaJs, FaNode, FaReact, } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

function ReactCard() {
  return (
    <div style={{ width: '40rem' }}>
      <Row>
        <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', textAlign: 'center', gap: '24px' }}>
          <div>
            <FaHtml5 style={{ fontSize: '5rem', paddingRight: '8px', color: '#fc490b', border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px'}} />
            <FaCss3 style={{ fontSize: '5rem', paddingRight: '8px', color: '#214ce5',border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px' }} />
            <SiTailwindcss style={{ fontSize: '5rem', paddingRight: '8px', color: '#38bdf8',border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px' }} />
            <FaJs style={{ fontSize: '5rem', paddingRight: '8px', color: '#efd81d',border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px' }} />
          </div>

          <div>
            <FaReact style={{ fontSize: '5rem', paddingRight: '8px', color: '#5ed3f3',border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px' }} />
            <FaNode style={{ fontSize: '5rem', paddingRight: '8px', color: '#60ab5e',border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px' }} />
            <SiExpress style={{ fontSize: '5rem', paddingRight: '8px', color: '#44463b',border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px' }} />
            <SiMongodb style={{ fontSize: '5rem', paddingRight: '8px', color: '#17ad55',border:'1px solid green', borderRadius: '5px', margin: '2px', padding: '2px' }} />
          </div>
        </div>
      </Row>
    </div>
  );
}

export default ReactCard;