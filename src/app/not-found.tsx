import React from 'react'
import NotFound from "@/layouts/errors/404"; 
import { getRegularPage } from '@/lib/contentParser';

const NotFoundPage = async () => {
  const notFoundData = await getRegularPage("404");
  return (
    <NotFound data={notFoundData} />
  )
}

export default NotFoundPage; 