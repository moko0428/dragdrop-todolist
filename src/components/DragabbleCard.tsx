import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { styled } from "styled-components";
import React from "react";

const Card = styled.div<{ isDragging: boolean }>`
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#487eb0" : props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.05)" : "none"};
`;
interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
function DragabbleCard({ toDoId, toDoText, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}
export default React.memo(DragabbleCard);
