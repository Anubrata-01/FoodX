import { Button, useToast } from '@chakra-ui/react'
import React from 'react'

const Toast = () => {
     
        const toast = useToast()
        return (
          <Button
            onClick={() =>
              toast({
                title: 'Account created.',
                description: "you are logged out",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }
          >
            Show Toast
          </Button>
        )
      
}

export default Toast