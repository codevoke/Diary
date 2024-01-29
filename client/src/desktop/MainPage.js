import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toast } from "react-toastify";

import './MainPage.css'
import { Button, TextField } from '@mui/material';


export default function MainPage () {
    const currentDate = new Date();
    const currentWeek = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24 / 7) + 1;
    
    var data = localStorage.getItem(`week${currentWeek}`) || {
        Monday: {p1: null,z1: null,p2: null,z2: null,p3: null,z3: null,p4: null,z4: null,p5: null,z5: null,p6: null,z6: null,p7: null,z7: null,p8: null,z8: null},
        Tuesday: {p1: null,z1: null,p2: null,z2: null,p3: null,z3: null,p4: null,z4: null,p5: null,z5: null,p6: null,z6: null,p7: null,z7: null,p8: null,z8: null},
        Wednsday: {p1: null,z1: null,p2: null,z2: null,p3: null,z3: null,p4: null,z4: null,p5: null,z5: null,p6: null,z6: null,p7: null,z7: null,p8: null,z8: null},
        Thurstday: {p1: null,z1: null,p2: null,z2: null,p3: null,z3: null,p4: null,z4: null,p5: null,z5: null,p6: null,z6: null,p7: null,z7: null,p8: null,z8: null},
        Firthday: {p1: null,z1: null,p2: null,z2: null,p3: null,z3: null,p4: null,z4: null,p5: null,z5: null,p6: null,z6: null,p7: null,z7: null,p8: null,z8: null},
        Saturday: {p1: null,z1: null,p2: null,z2: null,p3: null,z3: null,p4: null,z4: null,p5: null,z5: null,p6: null,z6: null,p7: null,z7: null,p8: null,z8: null}    
    }
    return (
        <>
            <Button variant='outlined' className="save-btn" onClick={() => {
                toast.error("Че в сказку попали что ли? какое сохранение")}
            }>Сохранить</Button>
            <div className="weekWrap">
                <div className="leftPart">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Понедельник</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{maxWidth: "50px"}}>№</TableCell>
                                    <TableCell>Предмет</TableCell>
                                    <TableCell>задание</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p1} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z1} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p2} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z2} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p3} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z3} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p4} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z4} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p5} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z5} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>5</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p6} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z6} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>6</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p7} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z7} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>7</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p8} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z8} size="small"/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Вторник</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{maxWidth: "50px"}}>№</TableCell>
                                    <TableCell>Предмет</TableCell>
                                    <TableCell>задание</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p1} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z1} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p2} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z2} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p3} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z3} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p4} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z4} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p5} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z5} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>5</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p6} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z6} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>6</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p7} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z7} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>7</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p8} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z8} size="small"/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Среда</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{maxWidth: "50px"}}>№</TableCell>
                                    <TableCell>Предмет</TableCell>
                                    <TableCell>задание</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p1} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z1} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p2} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z2} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p3} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z3} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p4} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z4} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p5} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z5} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>5</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p6} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z6} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>6</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p7} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z7} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>7</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p8} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z8} size="small"/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="rightPart">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Четверг</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{maxWidth: "50px"}}>№</TableCell>
                                    <TableCell>Предмет</TableCell>
                                    <TableCell>задание</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p1} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z1} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p2} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z2} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p3} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z3} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p4} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z4} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p5} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z5} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>5</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p6} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z6} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>6</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p7} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z7} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>7</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p8} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z8} size="small"/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Пятница</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{maxWidth: "50px"}}>№</TableCell>
                                    <TableCell>Предмет</TableCell>
                                    <TableCell>задание</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p1} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z1} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p2} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z2} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p3} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z3} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p4} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z4} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p5} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z5} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>5</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p6} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z6} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>6</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p7} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z7} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>7</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p8} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z8} size="small"/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Суббота</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{maxWidth: "50px"}}>№</TableCell>
                                    <TableCell>Предмет</TableCell>
                                    <TableCell>задание</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>1</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p1} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z1} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>2</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p2} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z2} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p3} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z3} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>3</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p4} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z4} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>4</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p5} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z5} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>5</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p6} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z6} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>6</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p7} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z7} size="small"/>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>7</TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.p8} size="small"/>
                                    </TableCell>
                                    <TableCell>
                                        <TextField variant='outlined' value={data.Monday.z8} size="small"/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}