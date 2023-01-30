import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Fragment } from 'react'
import { publicRoutes } from '~/routes'
import DefaultLayout from '~/layouts'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout
                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

//map qua và tạo ra 2 Route giống như lúc chưa tách ra folder routes.
//Đồng nghĩ với việc bạn không có path sau '/' thì sẽ lấy home như bình thường

export default App
