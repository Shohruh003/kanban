import { useCallback, useEffect, useRef, useState } from "react";
import { IBoardColumn, IBoardItem, IBoardRow, KanbanView } from "react-declarative";
import { IAttendanceStudent, STATUS } from "../../types";
import EditContent from "../HumanDetailedPopup/EditContent";
import MuiButton from "/components/Mui/MuiButton/MuiButton";
import styles from "./styles";
import kanbandata_mock from "./mockData";
import useStores from "/hooks/useStores";
import HumanCreatePopup from "../HumanCreatePopup/HumanCreatePopup";
import { Box } from "@mui/material";
import useLocale from "/hooks/useLocale";
import Locale from "./locale";

const KanbanComponent: React.FC = () => {
    const boardRef = useRef<HTMLDivElement>(null);
    const { popupStore } = useStores();
    const locale = useLocale(Locale);
    const getItems = useCallback((): IBoardItem<IAttendanceStudent>[] => {
        return kanbandata_mock.map((student) => ({
            id: student.id.toString(),
            column:
                student.status === STATUS.PRESENT
                    ? (locale.comeLabel)
                    : student.status === STATUS.ABSENT
                    ? (locale.missingLabel)
                    : (locale.reasonLabel),
            data: student,
            label: student.displayName,
            updatedAt: new Date().toISOString(),
        }));
    }, []);

    const [items, setItems] = useState<IBoardItem<IAttendanceStudent>[]>(getItems());

    const handleChangeColumn = (id: string, status: string) => {
        const newStatus =
            status === (locale.comeLabel)
                ? STATUS.PRESENT
                : status === (locale.missingLabel)
                ? STATUS.ABSENT
                : STATUS.EXCUSED;

        setItems((items) =>
            items.map((item) => {
                if (item.id === id) {
                    item.data.status = newStatus;
                    item.column = status;
                    item.updatedAt = new Date().toISOString();
                }
                return item;
            })
        );
    };

    const handleDeleteButton = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    useEffect(() => {
        setItems(getItems());
        if (boardRef.current) {
            KanbanView.enableScrollOnDrag({ current: boardRef.current });
        }
    }, [getItems]);

    const handleEditButton = (card: IAttendanceStudent) => {
        popupStore.openPopup({
            props: { size: "sm" },
            contentProps: { card },
            content: EditContent,
        });
    };

    const handleAddCardButton = () => {
        popupStore.openPopup({
            props: { size: "sm" },
            content: HumanCreatePopup,
        });
    }

    const rows: IBoardRow<IAttendanceStudent>[] = [
        {
            label: "Photo",
            value: (id, student) => (
                <img
                    style={{ maxWidth: "50px", maxHeight: "50px", borderRadius: "4px" }}
                    src={student.photo}
                    alt={student.displayName}
                    width="50px"
                    height="50px"
                />
            ),
        },
        {
            label: (locale.displayName),
            value: (id, student) => student.displayName,
        },
        {
            label: (locale.className),
            value: (id, student) => student.className,
        },
        {
            label: (locale.age),
            value: (id, student) => student.age,
        },
        {
            label: (locale.action),
            value: (id, student) => (
                <div style={{ display: "flex", gap: "8px" }}>
                    <MuiButton
                        label="Edit"
                        type="button"
                        size="small"
                        sx={styles.editButton}
                        onClick={() => handleEditButton(student)}
                    />
                    <MuiButton
                        label="Delete"
                        type="button"
                        size="small"
                        sx={styles.deleteButton}
                        onClick={() => handleDeleteButton(id)}
                    />
                </div>
            ),
        },
    ];

    const columns: IBoardColumn<IAttendanceStudent>[] = [
        {
            color: "#9C27B0",
            column: (locale.comeLabel),
            rows,
        },
        {
            color: "#00ACC1",
            column: (locale.missingLabel),
            rows,
        },
        {
            color: "#2E7D32",
            column: (locale.reasonLabel),
            rows,
        },
    ];

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <MuiButton sx={{width: '200px', marginLeft: 'auto'}} onClick={handleAddCardButton} label={locale.addCard}/>
            <KanbanView
                ref={boardRef}
                withUpdateOrder
                withGoBack
                sx={{
                    height: "calc(100vh - 200px)",
                    '& .tadicrm-cqhrzr-group': {
                        maxWidth: '100%',
                        margin: '0 5px',
                    },
                }}
                onChangeColumn={handleChangeColumn}
                columns={columns}
                items={items}
            />
        </Box>
    );
};

export default KanbanComponent;
