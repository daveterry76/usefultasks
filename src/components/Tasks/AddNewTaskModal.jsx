import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TasksContext } from '../../contexts/TasksContext';
import { v4 as uuid } from 'uuid';

function MyVerticallyCenteredModal(props) {

  const { task, setTask, tasks, setTasks } = useContext(TasksContext);

  const handleNewTasks = () => {
    setTasks([...tasks, { id: uuid(), task }])
    props.onHide();
  }


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
        <input value={task} onChange={(e) => setTask(e.target.value)} className='w-full rounded-md border p-2' type="text" />
      </Modal.Body>
      <Modal.Footer>
        <Button className='w-full' variant='success' onClick={handleNewTasks}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
