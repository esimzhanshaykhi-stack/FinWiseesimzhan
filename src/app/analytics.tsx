import React from 'react';
import { Page } from '../../screens/Amantai/FinanceUI';
export default function Screen(){return <Page title="Analytics" subtitle="Your monthly financial snapshot" items={[{title:'Income',detail:'Total received this month',value:'KZT 420,000'},{title:'Expenses',detail:'Total spent this month',value:'KZT 198,500'},{title:'Net savings',detail:'Income minus expenses',value:'KZT 221,500'}]} fields={[]} action={undefined} />;}
