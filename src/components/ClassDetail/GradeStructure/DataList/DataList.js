import * as React from 'react';
import { Container } from "@mui/material";
import DataElement from './DataElement'
import { SortableContainer } from 'react-sortable-hoc'
const DataList = SortableContainer(({ data, homework }) => {
   
    return (
        <Container sx={{ width: "80vw" }}>
            {data.map((item, key) => {

                return (
                    
                        <DataElement key={key} data = {item} homework = {homework} index = {key} /> 
                );
            })}
        </Container>
    )
})
export default DataList