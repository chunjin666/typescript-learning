// export const config = {};

// Promise.resolve().then(
// 		() => {
// 			return Promise.reject(Error('resolve reject'))
// 		},
// 		(e) => {
// 			console.log('get rejected', e)
// 		}
// 	)
// 	.catch((e) => {
// 		console.log('catched', e)
// 	})


Promise.reject('error').then(
		() => {
			return Promise.reject(Error('resolve reject'))
		},
		(e) => {
			console.log('get rejected', e)
			// return e
			return Promise.reject(e)
		}
	)
	.then((res) => {
		console.log('then then', res)
	})
	.catch((e) => {
		console.log('catched', e)
	})
	.then((res) => {
		console.log('catch then', res)
	})
	.finally(() => console.log('finally'))
	.then(() => console.log('then after finally'))


// Promise.resolve(1).then((val) => {
// 	console.log(val)
// })

console.log(process.env)
process.env
