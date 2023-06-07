import React from 'react'
import "./NewsPage.css"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import breaks from 'remark-breaks'
function NewsPage() {
    const news =  "# Admission Open for NRIs at XYZ College\n\n \n\nWe are pleased to announce that the admission process is now open for Non-Resident Indian (NRI) students at XYZ College. If you are an NRI student aspiring to pursue higher education in a renowned institution, this is the perfect opportunity for you.\n\n## Key Highlights\n\n- Comprehensive programs: We offer a wide range of undergraduate and postgraduate programs in various disciplines, including Engineering, Business, Arts, and Sciences.\n\n- World-class faculty: Our esteemed faculty members are experts in their respective fields and provide quality education and guidance to our students.\n\n- State-of-the-art facilities: Our campus is equipped with modern infrastructure, advanced laboratories, a well-stocked library, and recreational facilities to support a conducive learning environment.\n\n- Scholarships available: We understand the financial aspect of education and offer scholarships and financial aid options specifically for NRI students.\n\n- Global exposure: At XYZ College, we embrace diversity and provide opportunities for cultural exchange and global learning experiences.\n\n## Admission Process\n\n1. Eligibility criteria: NRI students must meet the eligibility criteria specified by the college. Please refer to our website for detailed information.\n\n2. Application submission: Interested candidates can submit their applications online through our official website or in person at the admission office.\n\n3. Document verification: After the initial screening, shortlisted candidates will be notified for document verification.\n\n4. Entrance exam: Depending on the program, applicants may need to appear for an entrance exam or provide standardized test scores.\n\n5. Personal interview: Shortlisted candidates will be called for a personal interview, either in person or through video conferencing.\n\n6. Final selection: The final selection will be based on the candidate's academic performance, entrance exam scores, interview, and availability of seats.\n\n## Important Dates\n\n- Application deadline: [Insert Date]"
  return (
    <div className='newsPageContainer'>
        <div className="newsPage">

    <ReactMarkdown children={news} remarkPlugins={[remarkGfm, breaks]} className='markdown'/>
        </div>
    </div>
  )
}

export default NewsPage
