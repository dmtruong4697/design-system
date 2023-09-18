import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PaginationItems from '../PaginationItems';

const Pagination =(props) => {
    const {Pags} = props;
    const [selected, setSelected] = useState()  
    const _renderPaginationItems =()=> (
        Pags?.map((Pag) => {
            return <PaginationItems key={Pag.id} status ={selected === Pag.id ? "Active" : 'Default'} content={Pag.id} onPressing={() => {
                setSelected(Pag.id)}}  />
        }))
    return(
        <View style={{ flexDirection:'row',paddingTop : 20,justifyContent:'space-between'}}>
            <PaginationItems   status='Default' content={'<'}></PaginationItems>
            {_renderPaginationItems()}
            <PaginationItems   status='Default' content={'>'}></PaginationItems>

        </View>
    )



}
export default Pagination