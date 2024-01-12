import { Modal, Grid, Button } from '@/components'

export const ModalConfirm = ({ isOpen, onClose, onConfirm, content }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="py-5">{content}</div>
      <Grid align="center" gap={3}>
        <Button color="secondary" size="sm" onClick={onClose}>
          Não
        </Button>
        <Button size="sm" onClick={onConfirm}>
          Sim
        </Button>
      </Grid>
    </Modal>
  )
}
