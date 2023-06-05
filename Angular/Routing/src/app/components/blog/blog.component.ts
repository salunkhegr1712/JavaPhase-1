import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs=[
    {id:1, title:"blog-1",content:"Wikimedia Commons is a media file repository making available public domain and freely licensed educational media content (images, sound and video clips) to everyone, in their own language. It acts as a common repository for the various projects of the Wikimedia Foundation, but you do not need to belong to one of those projects to use media hosted here. The repository is created and maintained not by paid archivists, but by volunteers. The scope of Commons is set out on the project scope pages."},
    {id:2, title:"blog-2", content:"Launched on 7 September 2004, Wikimedia Commons hit the 1,000,000 uploaded media file milestone on 30 November 2006 and currently contains 93,476,758 files. More background information about the Wikimedia Commons project itself can be found in the General disclaimer, at the Wikipedia page about Wikimedia Commons and its page in Meta-wiki."},
    {id:3, title:"blog-3",content:"Unlike traditional media repositories, Wikimedia Commons is free. Everyone is allowed to copy, use and modify any files here freely as long as they follow the terms specified by the author; this often means crediting the source and author(s) appropriately and releasing copies/improvements under the same freedom to others. The license conditions of each individual media file can be found on their description page."},
    {id:4, title:"blog-4",content:`In order to be able to upload files on Wikimedia Commons, you need to be logged in. You can register at the "Log in  create account" link in the upper right corner and enter a user name that will be used at all of your uploads/edits on images and texts. However if you just want to edit pages you don't need to be logged in (although it is encouraged). If you have taken advantage of unified login, then you are already signed up at Commons.`},
    {id:5, title:"blog-5",content:"Our first steps help file and our FAQ will help you a lot after registration. They explain how to customize the interface (for example the language), how to upload files and our basic licensing policy. You don't need technical skills in order to contribute here. Be bold contributing here and assume good faith for the intentions of others. This is a wiki—it is really easy."},
    {id:6, title:"blog-6",content:"Put Babel boxes on your user page so others know what languages you can speak and indicate your graphic abilities. All your uploads are stored in your personal gallery. Please sign your name on Talk pages by typing ~~~~. If you're copying files from another project, be sure to use the FileImporter."},
    {id:7, title:"blog-7",content:"If you want to upload large numbers of images, the program VicuñaUploader or Commonist will be helpful. If you need specific information on tools for viewing or editing our content please see the software page and tools page."},
    {id:8, title:"blog-8",content:"If you're a good photographer, don't hesitate to contribute your valuable images. If you're a good designer, look which diagrams and animations are badly needed."},
    {id:9, title:"blog-9",content:"All help, project, maintenance, discussion, policy pages and further tutorials about how to work in wikis like Wikimedia Commons are listed there. For an overview over the structure of the Wikimedia Commons project itself see Category:Commons."},
    {id:10,title:"blog-10",content:"The project definition and its derived detailed policy pages on licensing, allowed copyright tags and file types give you important information what we are and what not."},
    {id:11,title:"blog-11",content:"Wikimedia Commons is multilingual. Use Babel in order to find contributors who speak your language. Please add information about the languages you understand to your user page. The language policy is discussed at Commons talk:Language policy."},
    {id:12,title:"blog-12",content:"Graphic LabA place where you can request wikigraphists to improve, clean up, or color your images. We also have a place for videos and sounds.Photography critiquesA place where you can get feedback on your photography."},
  ]
}
