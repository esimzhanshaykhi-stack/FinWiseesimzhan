import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';

type Item = { title: string; detail: string; value?: string };
type Props = { title: string; subtitle: string; items?: Item[]; fields?: string[]; action?: string; onAction?: (values: Record<string,string>) => void };
const blue = '#2563EB';
export function Page({title,subtitle,items=[],fields=[],action,onAction}:Props) {
 const [values,setValues]=useState<Record<string,string>>({});
 const submit=()=>{ if(fields.some(f=>!values[f]?.trim())) { Alert.alert('Missing information','Please fill in all fields.'); return; } if(onAction) onAction(values); else Alert.alert('Demo saved','This is a local UI preview; no bank transaction was made.'); };
 return <ScrollView style={s.page} contentContainerStyle={s.content}>
  <Pressable onPress={()=>router.back()} style={s.back}><Text style={s.backText}>{'< Back'}</Text></Pressable>
  <Text style={s.brand}>FINWISE</Text><Text style={s.title}>{title}</Text><Text style={s.subtitle}>{subtitle}</Text>
  {items.map((item,i)=><View key={i} style={s.card}><View style={{flex:1}}><Text style={s.itemTitle}>{item.title}</Text><Text style={s.detail}>{item.detail}</Text></View>{item.value?<Text style={s.value}>{item.value}</Text>:null}</View>)}
  {fields.map(f=><View key={f}><Text style={s.label}>{f}</Text><TextInput style={s.input} placeholder={f} placeholderTextColor="#94A3B8" value={values[f]||''} onChangeText={t=>setValues(p=>({...p,[f]:t}))} /></View>)}
  {action?<Pressable style={s.button} onPress={submit}><Text style={s.buttonText}>{action}</Text></Pressable>:null}
  <Text style={s.note}>Demo data only - No connection to real bank accounts</Text>
 </ScrollView>;
}
export function Hub(){const links:[string,string][]=[['My Cards','my-cards'],['Add Card','add-card'],['Budget','budget'],['Add Budget','add-budget'],['Savings Goals','savings-goals'],['Add Goal','add-goal'],['Analytics','analytics'],['Categories','categories'],['Transfer Money','transfer-money'],['Transaction Details','transaction-details']];return <ScrollView style={s.page} contentContainerStyle={s.content}><Pressable onPress={()=>router.back()}><Text style={s.backText}>{'< Back'}</Text></Pressable><Text style={s.brand}>FINWISE</Text><Text style={s.title}>Money tools</Text><Text style={s.subtitle}>10 new finance screens - select a section</Text>{links.map(([label,path],i)=><Pressable key={path} style={s.link} onPress={()=>router.push(('/'+path) as any)}><Text style={s.linkText}>{i+1}.  {label}</Text><Text style={s.arrow}>{'>'}</Text></Pressable>)}</ScrollView>}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#F5F8FF'},content:{padding:24,paddingTop:34,paddingBottom:70,maxWidth:680,width:'100%',alignSelf:'center'},back:{marginBottom:14},backText:{color:blue,fontSize:17,fontWeight:'700'},brand:{color:blue,fontSize:12,fontWeight:'800',letterSpacing:2,marginTop:12},title:{color:'#12233F',fontSize:30,fontWeight:'800',marginTop:12},subtitle:{color:'#64748B',fontSize:15,lineHeight:22,marginTop:7,marginBottom:25},card:{flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:18,padding:18,marginBottom:12,borderWidth:1,borderColor:'#E7EEFA',gap:12},itemTitle:{color:'#162C4C',fontWeight:'700',fontSize:16},detail:{color:'#71829B',marginTop:5,fontSize:13},value:{color:blue,fontWeight:'800',fontSize:16},label:{fontSize:14,fontWeight:'700',color:'#253B5B',marginBottom:8,marginTop:12},input:{backgroundColor:'#FFFFFF',borderColor:'#DCE6F7',borderWidth:1,borderRadius:14,padding:16,fontSize:16,color:'#12233F'},button:{backgroundColor:blue,borderRadius:15,padding:18,alignItems:'center',marginTop:24},buttonText:{color:'#FFFFFF',fontSize:16,fontWeight:'800'},note:{textAlign:'center',color:'#93A2B6',fontSize:12,marginTop:28},link:{backgroundColor:'#FFFFFF',padding:18,borderRadius:16,marginBottom:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderColor:'#E4ECF8',borderWidth:1},linkText:{fontWeight:'700',color:'#1D3555',fontSize:16},arrow:{fontSize:24,color:blue}});
