import React from 'react'
import '../../App.css'

function AuthorSection() { 
        return (
            <>
           <section id="author">
                <div className="container-fluid content-section text-center">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h2>Author's Message</h2>
                            <div className="author__content">
                                <p>A beard is the collection of hair that grows on the chin and cheeks of humans and some non-human animals. In humans, usually only pubescent or adult males are able to grow beards. From an evolutionary viewpoint the beard is a part of the broader category of androgenic hair. It is a vestigial trait from a time when humans had hair on their face and entire body like the hair on gorillas. The evolutionary loss of hair is pronounced in some populations such as indigenous Americans and some east Asian populations, who have less facial hair, whereas people of European or South Asian ancestry and the Ainu have more facial hair.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <div className="bgimg-3">
                <p className="text">Grow It With Care.<br/> Wear It With Pride.</p>
            </div>
        
        </>
    )
    
}

export default AuthorSection