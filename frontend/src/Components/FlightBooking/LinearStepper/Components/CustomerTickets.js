import { usePDF } from 'react-to-pdf';

function CustomerTicket(){
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    return (
       <div>
          <button onClick={() => toPDF()}>Download PDF</button>
          <div ref={targetRef}>
             Content to be generated to PDF
          </div>
       </div>
    )
}