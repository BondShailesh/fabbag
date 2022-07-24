import React from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Heading,
    Textarea,
    Container,
    Button
} from '@chakra-ui/react'

function Form({ write }) {
    return (

        <div>
            {write &&
                <Container textAlign="start">
                    <Heading fontSize="17px" p="25px 0">WRITE A REVIEW</Heading>

                    <FormControl >
                        <FormLabel p="12px 0">Name</FormLabel>
                        <Input type='email' placeholder="Enter your name" />

                        <FormLabel p="12px 0">Email</FormLabel>
                        <Input type='email' placeholder="Shailesh@gmail.com" />

                        <FormLabel p="12px 0">Review Title</FormLabel>
                        <Input type='email' placeholder="give your riview a title" />

                        <FormLabel p="12px 0">Body of Review (1500)</FormLabel>
                        <Textarea placeholder='write your comment here' />
                    </FormControl>

                    <Button m="13px 0" bg="rgb(230,187,101)">SUBMIT REVIEW</Button>
                </Container>
            }
        </div>

    )
}

export default Form