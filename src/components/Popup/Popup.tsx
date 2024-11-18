import { Box, Dialog, IconButton } from '@mui/material';
import { FC, useContext } from 'react';
import { CoreContext } from '../../core/CoreContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import useStores from '../../hooks/useStores';
import { IPopupProps } from '../../stores/PopupStore';
// import Loader from '../Loader/Loader';
import styles from './styles';
import { observer } from 'mobx-react-lite';

const Popup: FC<IPopupProps> = ({ open, sx = {}, size = 'sm', onClose, children }: IPopupProps): JSX.Element => {
    const { isMobile } = useContext(CoreContext);
    // const { popupStore } = useStores();

    return (
        <Dialog
            open={open}
            onClose={onClose || undefined}
            closeAfterTransition
            scroll={isMobile ? 'paper' : 'body'}
            maxWidth={size}
            fullScreen={isMobile}
            sx={styles.dialog}
            PaperProps={{ sx: styles.paper }}
        >
            {/* <Loader isLoading={popupStore.isLoading} /> */}
            <Box sx={sx.paper || styles.content}>
                {onClose && <IconButton sx={styles.close} onClick={onClose} size="small"><HighlightOffIcon /></IconButton>}
                {children}
            </Box>
        </Dialog>
    )
}

export default observer<IPopupProps>(Popup);
