import '../main.scss'
import _ from 'lodash'

console.log(_.join(['Index', 'module', 'loaded'], ' '))

const toto = [1, 2, 3].map((n) => n * 2)
toto.forEach((n) => console.log('n: ', n))
