import { v4 as uuidv4 } from 'uuid'

export const getUUID = ()=>{
	//先从本地存储中获取
	let uuid_token = localStorage.getItem('UUIDTOKEN')
	//如果不存在，再生成uuid并存储
	if(!uuid_token) {
		uuid_token = uuidv4()
		localStorage.setItem('UUIDTOKEN', uuid_token)
	}
	return uuid_token
}