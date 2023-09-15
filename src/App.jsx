import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/scroll/Scroll'
import Dashboard from './layouts/dashboard/Dashboard'

function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <ScrollToTop>
               <Routes>
                  <Route path="/">
                     <Route index element={<Dashboard />}></Route>
                     <Route path={'default'} element={<Dashboard />}></Route>
                     <Route path={'analytic'} element={<Dashboard />}></Route>
                     <Route path={'sales'} element={<Dashboard />}></Route>
                     <Route path={'mail'} element={<Dashboard />}></Route>
                     <Route path={'chats'} element={<Dashboard />}></Route>
                     <Route path={'calendar'} element={<Dashboard />}></Route>
                     <Route path={'projects'}>
                        <Route index element={<Dashboard />} />
                        <Route path={'list'} element={<Dashboard />} />
                        <Route path={'scrumboard'} element={<Dashboard />} />
                     </Route>
                     <Route path={'e-commerce'}>
                        <Route index element={<Dashboard />} />
                        <Route path={'product-list'} element={<Dashboard />} />
                        <Route path={'add-product'} element={<Dashboard />} />
                        <Route path={'edit-product'} element={<Dashboard />} />
                        <Route path={'orders'} element={<Dashboard />} />
                     </Route>
                     <Route path={'general'}>
                        <Route index element={<Dashboard />} />
                        <Route path={'button'} element={<Dashboard />} />
                        <Route path={'icon'} element={<Dashboard />} />
                        <Route path={'typography'} element={<Dashboard />} />
                     </Route>
                     <Route path={'layout'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'grid'} element={<Dashboard />} />
                        <Route path={'layout'} element={<Dashboard />} />
                     </Route>
                     <Route path={'navigation'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'affix'} element={<Dashboard />} />
                        <Route path={'breadcrum'} element={<Dashboard />} />
                        <Route path={'dropdown'} element={<Dashboard />} />
                        <Route path={'menu'} element={<Dashboard />} />
                        <Route path={'pagination'} element={<Dashboard />} />
                        <Route path={'steps'} element={<Dashboard />} />
                     </Route>
                     <Route path={'data-entry'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'auto-complete'} element={<Dashboard />} />
                        <Route path={'checkbox'} element={<Dashboard />} />
                     </Route>
                     <Route path={'data-display'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'avatar'} element={<Dashboard />} />
                        <Route path={'badge'} element={<Dashboard />} />
                     </Route>
                     <Route path={'feedback'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'alert'} element={<Dashboard />} />
                        <Route path={'drawer'} element={<Dashboard />} />
                     </Route>
                     <Route path={'orther'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'anchor'} element={<Dashboard />} />
                        <Route path={'backtop'} element={<Dashboard />} />
                     </Route>
                     <Route path={'charts'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'apex charts'} element={<Dashboard />} />
                        <Route path={'chartjs'} element={<Dashboard />} />
                     </Route>
                     <Route path={'maps'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'simple-maps'} element={<Dashboard />} />
                     </Route>
                     <Route path={'pages'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'profile'} element={<Dashboard />} />
                        <Route path={'user-list'} element={<Dashboard />} />
                     </Route>
                     <Route path={'authentication'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'login-1'} element={<Dashboard />} />
                        <Route path={'login-2'} element={<Dashboard />} />
                     </Route>
                     <Route path={'errors'}>
                        <Route index element={<Dashboard />}></Route>
                        <Route path={'error-page-1'} element={<Dashboard />} />
                        <Route path={'error-page-2'} element={<Dashboard />} />
                     </Route>
                     <Route path={'documentation'} element={<Dashboard />}></Route>
                     <Route path={'changelog'} element={<Dashboard />}></Route>
                  </Route>
               </Routes>
            </ScrollToTop>
         </BrowserRouter>
      </div>
   )
}

export default App
