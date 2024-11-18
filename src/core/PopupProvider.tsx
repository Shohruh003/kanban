import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import Popup from "../components/Popup/Popup";
import useStores from "/hooks/useStores";


const PopupProvider: FC = () => {
    const { popupStore } = useStores();
    const Content = popupStore.popup[popupStore.popup.length - 1]?.content;
    const currentPopup = popupStore.popup[popupStore.popup.length - 1];
    const contentProps = currentPopup?.contentProps || {};
    const popupProps = currentPopup?.props || {};

    if (!Content) {
        return null;
    }

    return (
        <Popup open={!!popupStore.popup.length} onClose={popupStore.closePopup} {...popupProps}>
            <Content {...contentProps} />
        </Popup>
    )
}

export default observer(PopupProvider);
