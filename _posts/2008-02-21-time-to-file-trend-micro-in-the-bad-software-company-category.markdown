---
author: SeanFromIT
comments: true
date: 2008-02-21 01:32:00+00:00
layout: post
link: https://feeney.mba/2008/02/21/time-to-file-trend-micro-in-the-bad-software-company-category/
slug: time-to-file-trend-micro-in-the-bad-software-company-category
title: Time to File Trend Micro in the "Bad Software Company" Category
wordpress_id: 205
categories:
- anti-virus
- Bad Business Practices
- law
- open source
---

We have a Pick Your Brain request. This one comes from Barracuda Networks, the email and web security appliances company, but it’s about an attack on ClamAV, the Open Source antivirus product.

Barracuda includes ClamAV in some of its enterprise solutions, although it’s a small part of what Barracuda does. And Trend Micro has accused ClamAV of infringing a patent it owns, #5,623,600. It specifically has named Barracuda Spam Firewall, the Barracuda Web Filter, and the Barracuda IM Firewall as infringing. Trend Micro has been trying to get Barracuda to either pay license royalties for including ClamAV or stop using ClamAV in its products.

Barracuda, however, is an Open Invention Network licensee, and it decided to stand up and defend ClamAV against what it views as a bogus claim. Barracuda believes the patent is questionable, at best, and believes there is prior art to be found, so it decided to defend ClamAV on behalf of the community, and it asks for our help in finding prior art. Here’s the specific Barracuda request for prior art:


<blockquote>“People should look for art dated prior to Trend Micro’s filing date of September 26, 1995. The ‘600 patent is entitled “Virus Detection And Removal Apparatus For Computer Networks.” We are interested in all material, including software, code, publications or papers, patents, communications, other media or Web sites that relate to the technology described prior to the filing date.

In particular, this prior art should show antivirus scanning on a firewall or gateway. However, many of the claims do not require virus detection at a gateway. So any material that illustrates virus scanning on a file server is also of interest.

We also believe that a product called MIMESweeper 1.0 from a company called Clearswift, Authentium, or Integralis anticipates several claims of the ‘600 patent. We have yet to locate a copy of this product and would appreciate anyone who has a copy sending it our way.”</blockquote>


Litigation has begun, as I’ll explain in detail in a minute, and there is a complaint filed by Trend Micro at the International Trade Commission, against Barracuda and Panda Software International and Panda Distribution of California, and the ITC decided on December 21st to investigate the complaint.

Here’s how Trend Micro describes its patent in the ITC complaint:


<blockquote>“To decrease the risk of a virus entering and/or leaving a network, the ‘600 Patent scans for viruses and other undesired software at the gateway of a network. Moreover, because viruses may be embedded in the content (such as, for example, email attachments and other content from the World Wide Web), the ‘600 Patent scans the content.”</blockquote>


I know. You are rolling on the floor, gasping for breath because you are laughing so hard that anyone would even try to claim such an obvious thing as blocking viruses at the gateway. What can I tell you? Patents have gone beserk. For any who don’t know what blocking at the gateway means, it’s just that in the enterprise, you block before anything even reaches the employees’ computers, as opposed to each one installing antivirus software individually. Obvious. Obvious. Obvious business method.

But believe it or not, that’s what is being claimed as patented. I know. But with patents, what’s the use in being surprised or indignant? The whole system has veered so far from true North that the best response at this point is to find prior art and knock them down one by one until the message is received that attacking FOSS with patents is counterproductive.

Here’s what the ITC said the complaint is about and what happens next:


<blockquote>“The complaint alleges violations of section 337 of the Tariff Act of 1930 in the importation into the United States of certain systems for detecting and removing viruses and worms, components thereof, and products containing same that infringe a patent owned by Trend Micro. The complainant requests that the ITC issue an exclusion order and cease and desist orders....

By instituting this investigation (337-TA-624), the ITC has not yet made any decision on the merits of the case. The case will be referred to the Honorable Carl C. Charneski, an ITC administrative law judge, who will schedule and hold an evidentiary hearing. Judge Charneski will make an initial determination as to whether there is a violation of section 337; that initial determination is subject to review by the Commission.

The ITC will make a final determination in the investigation at the earliest practicable time. Within 45 days after institution of the investigation, the ITC will set a target date for completing the investigation. ITC remedial orders in section 337 cases are effective when issued and become final 60 days after issuance unless disapproved for policy reasons by the U.S. Trade Representative within that 60-day period.”</blockquote>


I think they pretty much always do investigate complaints, by the way. If you’d like to read the ITC complaint, go to this page and search for Investigation Number: 337-624 or search by title: Certain Systems for Detecting and Removing Viruses or Worms, Components Thereof, and Products Containing Same, 337-TA-624. But no matter how you slice it, it’s a serious matter, and the time to find prior art is now.

Barracuda isn’t just interested in prior art regarding blocking at the gateway. In addition, specific features of interest listed include the following:


<blockquote>* virus detection at an FTP proxy server

* use of an FTP daemon

* virus detection at an SMTP proxy server

* use of an SMTP daemon

* determining whether the data is of a type that is likely to contain a virus, and only determining whether that data contains a virus

* signature scanning

* file typing by comparing extensions

* determining whether email messages with multiple encoded portions (i.e., attachments) contain viruses by storing each encoded portion in a separate temporary file, decoding the encoded portions of the mail message to produce decoded portions, and scanning each decoded portion for a virus

* mail parsing

* only scanning mail messages that have attachments

* performing a preset action if a virus is found, including, among other things, transferring the data unchanged, not transferring the data, storing the data with a new file name and alerting the recipient of the new file name, and transferring modified data.</blockquote>


So if you know of anything that did such things, or were written about, prior to the September 26, 1995 date, sing out. Barracuda has some examples of prior art it has in hand already, and if you go to their Legal Defense of Free and Open Source Software page, and scroll down to the Prior Art heading, you’ll find them.

I can’t help but note that Trend Micro didn’t go after ClamAV developers directly; it zeroed in on a business using ClamAV instead. Why might that be? I think it’s patent pragmatism at work. Litigation often starts with a “who has the deep pockets?” analysis, because most litigation is about money. And I understand that McAfee, Symantec and Fortinet have all settled with Trend Micro already, although the details are not public. But this seems to be about more than that. Anyway, FOSS projects really can’t play that patent money game. We don’t usually have the money. Anyone using ClamAV, should Trend Micro be successful, is potentially a target.

More About the Litigation
Barracuda went to federal court first, filing a lawsuit [PDF] against Trend Micro, seeking a declaratory judgment that Trend Micro’s ‘600 patent is invalid and that ClamAV does not infringe it anyhow, and Trend Micro filed an Answer with Counterclaims [PDF] to which Barracuda has replied [PDF]. Trend Micro accuses Barracuda of infringing its patent directly, contributorily, and by inducement. A declaratory judgment is the same thing Red Hat asked the court in Delaware for against SCO. You can read more about what a declaratory judgment is here, in an article I wrote way back in June of 2003, if you are curious, but the short version is that it’s asking the court to settle a controversy. It’s not asking for money, just that rights be established to settle whatever the controversy is.

Trend Micro then filed the complaint with the International Trade Commission (ITC), complaining about patent infringement but essentially trying to block Barracuda from importing ClamAV on the basis of the alleged infringement, as best as I can make out. Not that Barracuda does import it, and in fact it specifically denies importing ClamAV in its Answer [PDF] to the IDC complaint, but that’s the Trend Micro claim. Barracuda’s CEO Dean Drako, in today’s press release says this:


<blockquote>“Barracuda Networks designs and manufactures all of the products in question in the United States. We believe that Trend Micro’s actions are a blatant abuse of the U.S. legal system. Since Trend Micro is a consumer of free and open source software we call on Trend Micro to drop these attacks.”</blockquote>


Here’s the essential Trend Micro allegation:


<blockquote>“In particular, as discussed above, ClamAV antivirus software which is included in Barracuda’s antivirus system is specifically designed to provide protection from computer viruses at the network gateway....

...upon information and belief, Barracuda’s AV systems contain open source antivirus software, known as ClamAV, that is specifically designed to protect against computer viruses at the network gateway...Further, upon information and belief, ClamAV software is written, at least in part, by ClamAV developer team members located in Europe and Australia. Thus, Barracuda imports software specifically designed to protect against viruses at the network gateway.”</blockquote>


High crime indeed, blocking viruses at the gateway. But Barracuda says it downloads ClamAV from servers in the US. Did you notice, though, how Trend Micro mentioned that ClamAV is Open Source? That is part of what makes me think this is yet another attack on the development method itself, this time trying to use its international development as the wedge. If you think about it, though, blocking FOSS antivirus solutions only makes the Internet more dangerous for everyone. It’s considered one of the very best in its league. And it’s obvious that FOSS projects can’t pay patent license royalties, so it’s a stranglehold maneuver.

Unlike commercial software vendors that typically have a defensive patent portfolio as a deterrent -- and thus maintain a kind of cold war truce against such suits -- or don’t mind trading and swapping money in reaction to such attacks, the Free and Open Source community is more vulnerable. I have never forgotten that Microsoft’s Bill Gates said in 2003, right after SCO sued IBM and began trash talking Linux, that Linux would find itself under legal attack for the next five years. And so it has proven to be. Partly, I believe, the goal was to tax the community, not just for the joy of getting the tax money, but to add the heavy costs of legal defense to FOSS development, so it couldn’t be free anymore, and so proprietary software would have more of a chance against it in any TCO analysis. The expense of legal defense alone could put a heavy tax on the community, and I am very glad to see Barracuda, which has benefited from ClamAV, be willing to take on the cost of defending it.

In other words, this is a serious situation. I think it’s another attempt to attack the FOSS development model and force those using such software to pay the proprietary dudes a tax. That’s the same dream that SCO started with, and Microsoft shares the dream. A lot of proprietary software folks realize the sun is setting on their business model, and they would like a piece of what is replacing it, without having to actually do anything to earn the money they want to collect, and patents are simply perfect for lazy incumbents. If ClamAV is not successfully defended, I think there may be an avalanche of this kind of attack, proprietary vendors looking for some silver to cross their palms from anyone using FOSS software.

Is it all coordinated? Maybe. But who cares? (Unless you are the EU Commission.) It’s serious, no matter who is behind it. Taxing or restricting Free and Open Source software based on questionable patents affects both security innovation and industry pricing of security products. And with more than one million unique IP addresses downloading updates of ClamAV from SourceForge daily, this attack potentially can impact a lot of people.

And let me add one final thing: I know some of us don’t use any antivirus on our GNU/Linux computers. I don’t myself. But businesses do. In many cases, they have to if they wish to fulfill certain legal requirements or if they wish certain kinds of business. So, instead of wasting energy arguing the point, let’s just get to work on the prior art. And if you have a copy of MIMEsweeper 1.0, please go to this page that Barracuda has set up for prior art submissions and tell them you have it in addition to mentioning it here in your comments.

Update: Don Marti has a story on LinuxWorld about the Barracuda request for help. He spoke with the attorney for Barracuda, James Yoon of Wilson, Sonsini, and with Eben Moglen of Software Freedom Law Center. Here’s what Moglen has to say:


<blockquote>“Eben Moglen, professor of law and legal history at Columbia Law School and chairman of the Software Freedom Law Center, says that his organization and other concerned users can act as a “Business Improvement District rent-a-cop” to help protect companies that work with free and open source software from so-called “patent trolls.”

“A troll that might have thought it was safe to take a bite out of a business in the past might find that the business is aligned with the free world,” he said in a phone interview. “We want the trolls to go and work in some other neighborhood.”</blockquote>


And Yoon, who intriguingly is both an IP attorney and in the past worked as an electrical engineer, talks about both the litigation scheduling and the ITC importation complaint:


<blockquote>Trend and Barracuda are in the discovery phase of the ITC case, but, Yoon says, “a scheduling order is not in place,” leaving time for Barracuda to introduce additional prior art. Drako says he believes the ITC filing is an abuse of the US legal system, since, although ClamAV has non-US contributors, the free antivirus software is maintained by Maryland-based Sourcefire, Inc., and Barracuda downloads and compiles ClamAV in the USA. Other imported parts that Trend cites in its complaints are standard PC hardware, “staple” components not specific to virus filtering, Drako says.</blockquote>


Update 2: Here are some more court filings that I know will help you focus on precisely what to look for in the way of prior art, the Joint Statement of Claim Construction and a list of all the precise ways Trend Micro thinks ClamAV infringes. Take a look:


<blockquote>* The Joint Claim Construction Statement [PDF]

* How Trend Micro thinks Barracuda Web Filter infringes

* How it thinks Barracuda Spam Firewall infringes 1

* Spam Firewall 2

* Spam Firewall 3</blockquote>


The Joint Claims Construction Statement is particularly useful, because it’s what the parties believe is in dispute. And they get together and decide what terms in the patent claims mean. For example, in this litigation, the parties have agreed that the word server means either software or a computer used as one, or more precisely, “A computer and/or software that performs services for other computers or programs”. But they can’t agree on what the word “file” means. If you look at the chart of disputed words and the evidence in support on page 8, perhaps you can figure out why each wishes to define it the way it does, but I was so far unable to solve that mystery, except that one has to assume that each wants the definition to match the claims and/or defenses against them. They are also in dispute over what a proxy server definition should be.
Not every claim listed in Trend Micro’s patent is still in dispute, so to be really useful here, it is worth slogging thorugh the details in that document. Happy prior art hunting!

Update 3: I had an idea regarding MIMEsweeper 1.0. Who, I asked myself, would be most likely to have a copy? What about security guys? For example, would the individual who reported this exploit to SecurityTracker not have a copy? I think he must. Also, a Groklaw member tells me that Clearswift offers the product still, at least on the German site, and there are forums, where you can ask questions, and since it’s frequented by both employees and customers, you might bump into an old-time programmer or sales guy there who has a clue, and he says most of them will speak English.

via [Groklaw](http://www.groklaw.net/article.php?story=20080125135544713) and under CC BY-NC.
