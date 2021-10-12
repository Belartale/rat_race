// Core
import React, { FC } from 'react';
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary, Chat as ChatComponent } from '../../components';
import { ContainerCenter } from '../../container';
import { Button, ShowUserName } from '../../elements';

const Chat: FC = () => {
    const { logoutUser } = useUser();

    return (
        <ContainerCenter
            fullHeight
            flexDirection = 'column'
            justifyContent = 'space-around'>
            <div>
                <ShowUserName />
                <Button
                    padding = '5px 10px'
                    variant = 'submit secondary'
                    onClick = { logoutUser }>Logout
                </Button>
            </div>
            <ChatComponent/>
            <div>
                Клава
            </div>
        </ContainerCenter>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
