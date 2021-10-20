using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class JavascriptHook : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void Hello();

    [DllImport("__Internal")]
    private static extern string DLTexture();
    // Start is called before the first frame update
    void Start()
    {
        // Hello();
        string url = DLTexture();
        Debug.LogError(url);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void PrintMessage(string msg)
    {
        Debug.LogError(msg);
    }


}
