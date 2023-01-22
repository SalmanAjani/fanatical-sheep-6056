import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useState } from 'react'


export const PopUps = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nimble cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Shop smart, shop nimble

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}