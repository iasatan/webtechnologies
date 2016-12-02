package hu.uni.miskolc.webtech.librarian.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;



@Controller
public class IndexController {
	
	@RequestMapping(value={"", "/", "/index"})
	public ModelAndView homePage(){
		ModelAndView result = new ModelAndView("index");
		return result;
	}
	@RequestMapping(value={"/contact"})
	public ModelAndView contactPage(){
		ModelAndView result = new ModelAndView("contact");
		return result;
	}
	@RequestMapping(value={"/bookauthors"})
	public ModelAndView bookauthorsPage(){
		ModelAndView result = new ModelAndView("bookauthors");
		return result;
	}
	@RequestMapping(value={"/bookbooks"})
	public ModelAndView bookbooksPage(){
		ModelAndView result = new ModelAndView("bookbooks");
		return result;
	}
	@RequestMapping("/hello")
	public @ResponseBody String sayHello(){
		return "Hello World";
	}

}
