import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input className='w-full rounded-md border p-2' type="text" />
      </Modal.Body>
      <Modal.Footer>
        <Button className='w-full' variant='success' onClick={props.onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
