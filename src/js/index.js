import _ from 'lodash'
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

console.log(_.join(['Index', 'module', 'loaded'], ' '))

const toto = [1, 2, 3].map((n) => n * 2)
toto.forEach((n) => console.log('n: ', n))
