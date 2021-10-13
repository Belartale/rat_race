// Core
import React, { ChangeEvent, FC, useRef, useState } from 'react';

// Bus
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';

// Container
import { ContainerCenter } from '../../container';

// Elements
import { Button, Card, Input } from '../../elements';

// Tools
import { useForm, useValidation } from '../../../tools/hooks';

// Utils
import { getSliceDate, useToggleUseState } from '../../../tools/utils';

// Types
import { TextChatForm } from '../../../bus/user/types';

// Styles
import {
    ContainerStyled,
    Message,
    MessageBody,
    MessageChanged,
    MessageDate,
    MessageDetails,
    MessageText,
    MessageUserName,
    WindowChat,
} from './styles';
import { Keyboard } from '../';
import { useInputKeyboardRedux } from '../../../bus/client/inputKeyboard';

export const Chat: FC = () => {
    const refWindowChat = useRef(null);
    const { isToggle, handleToggle } = useToggleUseState();

    const { user, scrollWindowChat } = useUser({ scrollWindowChatCurrent: refWindowChat.current });
    const { messages, createMessage } = useMessages();
    const { inputKeyboardRedux, setInputKeyboardAction, resetInputKeyboardToInitial } = useInputKeyboardRedux();
    const [
        form,
        handleChange,
        setInitialForm,
    ] = useForm<TextChatForm>({ text: inputKeyboardRedux, username: user.username });
    const { isValidation, handleValidation } = useValidation(!!inputKeyboardRedux);
    // для клавы
    const [ keyPressState, setKeyPressState ] = useState<string | null>(null);

    const onSubmitButton = () => {
        createMessage(form);
        setInitialForm({ text: '', username: user.username });
        resetInputKeyboardToInitial();
        handleValidation(null);
        scrollWindowChat(refWindowChat.current);
    };

    const onHandleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputKeyboardAction(event.target.value);

        // old
        handleChange(event, false);
        handleValidation(event.target.value);
    };

    //! Если мышка на WindowChat скрол отменить/ onMousEnter / onMousLeave
    return (
        <Card
            height = '75vh'
            transformationWhen = '576px'
            width = '500px'>
            <ContainerStyled>
                <WindowChat ref = { refWindowChat }>
                    {messages.map((message) => (
                        <Message
                            isOwner = { String(user.username === message.username) }
                            key = { message._id }>
                            <MessageBody isOwner = { String(user.username === message.username) }>
                                <MessageUserName>{message.username}</MessageUserName>
                                <MessageText>{message.text}</MessageText>
                                <MessageDetails direction = { String(message.createdAt === message.updatedAt) }>
                                    {
                                        message.createdAt === message.updatedAt
                                            ? null
                                            : (
                                                <MessageChanged>
                                                    Changed
                                                </MessageChanged>
                                            )
                                    }

                                    <MessageDate>
                                        {getSliceDate(message.createdAt)}
                                    </MessageDate>
                                </MessageDetails>
                            </MessageBody>
                        </Message>
                    )).reverse()
                    }
                </WindowChat>
                <form onSubmit = { (event) => event.preventDefault() }>
                    <ContainerCenter justifyContent = 'space-between'>
                        <Input
                            containerWidth = '100%'
                            direction = 'row'
                            name = 'text'
                            style = {{ marginRight: '20px' }}
                            type = 'text'
                            value = { inputKeyboardRedux }
                            onChange = { (event: ChangeEvent<HTMLInputElement>) => onHandleInput(event) }
                            onKeyPress = { (event) => setKeyPressState(event.nativeEvent.key ?? null) }
                        />
                        <Button
                            disabled = { !isValidation }
                            padding = '5px 10px'
                            variant = {  'submit primary' }
                            onClick = { onSubmitButton }>
                            SEND
                        </Button>
                        <Button
                            padding = '5px 10px'
                            style = {{ marginLeft: '5px' }}
                            variant = { 'submit primary' }
                            onClick = { handleToggle }>
                            Keyboard
                        </Button>

                    </ContainerCenter>
                </form>
                {isToggle ? <Keyboard keyPressState = { keyPressState } /> : null}
            </ContainerStyled>
        </Card>
    );
};
//!  onClick = { handleToggle } исправить на false

