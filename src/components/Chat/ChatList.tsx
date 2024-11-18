import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./styles";
import SaveImage from "/components/SaveImage/SaveImage";

export interface ChatListItem {
    teacherFio: string;
    teacherRang: string;
    teacherIcon?: string;
    unreadMessages?: number;
}

interface ChatListProps {
    title?: string;
    chats: Array<ChatListItem>;
}

const ChatList: FC<ChatListProps> = ({ title, chats }) => {
    return (
        <Box sx={styles.chatContainer}>
            {title && <Typography sx={styles.title} variant="subtitle2">{title}</Typography>}
            <Box sx={styles.chatsListBox}>
                {chats.map(item => (
                    <Stack flexDirection="row" justifyContent="space-between" sx={styles.chatBox}>
                        <Box>
                            <Typography variant="body1">{item.teacherFio}</Typography>
                            <Typography variant="caption">{item.teacherRang}</Typography>
                        </Box>
                        <SaveImage src={item.teacherIcon} alternativeSrc="/public/user-default-icon.png" />
                    </Stack>
                ))}
            </Box>
        </Box>
    )
}

export default ChatList;
