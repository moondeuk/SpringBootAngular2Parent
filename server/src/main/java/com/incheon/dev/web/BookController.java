package com.incheon.dev.web;


import com.incheon.dev.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by marco on 23/02/16.
 */
@RestController
@CrossOrigin()
public class BookController {

    private List<Book> resultList = new ArrayList<>();


    public BookController() {
        resultList.add(new Book("9788960779297", "머신 러닝 인 자바", "보스티얀 칼루자", "2014"));
        resultList.add(new Book("9791158390129", "자바스크립트 + jQuery 완전정복 스터디 1 : 기초편", "김춘경", "2015"));
        resultList.add(new Book("9791185890388", "스프링 인 액션", "크레이그 월즈 ", "2016"));
    }

    @RequestMapping(value = "/result_list", method = RequestMethod.GET)
    public @ResponseBody List<Book> resultList(){
        return resultList;
    }


}
